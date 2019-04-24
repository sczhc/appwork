using System.Web.Optimization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using GlobExpressions;
using BundleTransformer.Core.Bundles;
using BundleTransformer.Core.Orderers;
using BundleTransformer.Core.Resolvers;
using System.Web;

namespace AspnetMvcStarter
{
    public class CssRewriteUrlTransformWrapper : IItemTransform
    {
        public string Process(string includedVirtualPath, string input)
        {
            return new CssRewriteUrlTransform().Process("~" + VirtualPathUtility.ToAbsolute(includedVirtualPath), input);
        }
    }

    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // bundles.UseCdn = true;
            // BundleTable.EnableOptimizations = true;

            // Replace a default bundle resolver in order to the debugging HTTP handler
            // can use transformations of the corresponding bundle
            BundleResolver.Current = new CustomBundleResolver();

            // ------------------------------------------------------------------------------------
            // Application assets
            //

            bundles.Add(SassBundle("~/bundle/css/main").Include("~/Content/main.scss"));
            bundles.Add(new ScriptBundle("~/bundle/js/main").Include("~/Scripts/main.js"));

            // Bundle jquery-validation-unobtrusive package
            bundles.Add(new ScriptBundle("~/bundle/vendor/js/jquery-validation-unobtrusive/jquery-validation-unobtrusive").Include(
                        "~/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js"));

            // ------------------------------------------------------------------------------------
            // Core stylesheets
            //

            bundles.Add(SassBundle("~/bundle/vendor/css/bootstrap").Include("~/Vendor/css/bootstrap.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/appwork").Include("~/Vendor/css/appwork.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-corporate").Include("~/Vendor/css/theme-corporate.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/colors").Include("~/Vendor/css/colors.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/uikit").Include("~/Vendor/css/uikit.scss"));

            // ------------------------------------------------------------------------------------
            // Automatically bundle ~/Vendor/js directory
            //

            // Bundle path: ~/bundle/vendor/js/{filename}
            foreach (string[] bundleFile in GetVendorBundles("js", "js", "**/*", "js"))
            {
                bundles.Add(new Bundle(bundleFile[0]).Include(bundleFile[1]));
            }

            // ------------------------------------------------------------------------------------
            // Automatically bundle ~/Vendor/css/pages directory
            //

            // Bundle path: ~/bundle/vendor/css/pages/{filename}
            foreach (string[] bundleFile in GetVendorBundles("css\\pages", "css/pages", "**/*", "scss"))
            {
                bundles.Add(SassBundle(bundleFile[0]).Include(bundleFile[1]));
            }

            // ------------------------------------------------------------------------------------
            // Automatically bundle ~/Vendor/fonts directory
            //

            // Bundle path: ~/bundle/vendor/fonts/{filename}
            foreach (string[] bundleFile in GetVendorBundles("fonts", "fonts", "*", "css"))
            {
                bundles.Add(new Bundle(bundleFile[0]).Include(bundleFile[1], new CssRewriteUrlTransformWrapper()));
            }

            // ------------------------------------------------------------------------------------
            // Automatically bundle ~/Vendor/libs directory
            //

            // Bundle path: ~/bundle/vendor/css/{libdir}/{filename}
            foreach (string[] bundleFile in GetVendorBundles("libs", "css", "**/*", "scss"))
            {
                if (bundleFile[2] == "true")
                {
                    bundles.Add(SassBundle(bundleFile[0]).Include(bundleFile[1], new CssRewriteUrlTransformWrapper()));
                }
                else
                {
                    bundles.Add(SassBundle(bundleFile[0]).Include(bundleFile[1]));
                }
            }

            // Bundle path: ~/bundle/vendor/js/{libdir}/{filename}
            foreach (string[] bundleFile in GetVendorBundles("libs", "js", "**/*", "js"))
            {
                bundles.Add(new Bundle(bundleFile[0]).Include(bundleFile[1]));
            }

        }

        private static Bundle SassBundle(string path)
        {
            return new CustomStyleBundle(path)
            {
                Orderer = new NullOrderer()
            };
        }

        private static string[][] GetVendorBundles(string sourcePath, string bundlePath, string globPattern, string ext)
        {
            // Application root directory path
            string APP_PATH = AppDomain.CurrentDomain.BaseDirectory;
            //

            DirectoryInfo dirInfo = new DirectoryInfo(APP_PATH + "\\Vendor\\" + sourcePath);
            IEnumerable<FileInfo> contents = dirInfo.GlobFiles(globPattern + "." + ext);

            List<string[]> bundles = new List<string[]>();

            Regex normalizeRegex = new Regex("\\\\");

            sourcePath = normalizeRegex.Replace(sourcePath, "/") + "/";

            Regex pathRegex = new Regex(".*?" + Regex.Escape("/Vendor/" + sourcePath));
            Regex nameRegex = new Regex("\\." + Regex.Escape(ext) + "$");

            Regex urlRewriteTestRegex = new Regex("/(" +
                    "minicolors/minicolors" + "|" +
                    "blueimp-gallery/gallery-video" + "|" +
                    "blueimp-gallery/gallery" + "|" +
                    "jstree/themes/default/style" + "|" +
                    "jstree/themes/default-dark/style" + "|" +
                    "photoswipe/photoswipe" +
                ")\\.scss$");

            foreach (FileInfo file in contents)
            {
                string filePath = pathRegex.Replace(normalizeRegex.Replace(file.FullName, "/"), "");
                string relativeBundlePath = "~/bundle/vendor/" + bundlePath + "/" + nameRegex.Replace(filePath, "");
                string relativeSourcePath = "~/Vendor/" + sourcePath + filePath;
                bool urlRewrite = urlRewriteTestRegex.IsMatch(relativeSourcePath);

                bundles.Add(new string[] { relativeBundlePath, relativeSourcePath, urlRewrite ? "true" : "false" });
            }

            return bundles.ToArray();
        }

    }
}