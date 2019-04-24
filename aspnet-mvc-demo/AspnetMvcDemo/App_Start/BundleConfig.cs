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

namespace AspnetMvcDemo
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

            bundles.Add(new StyleBundle("~/bundle/css/demo").Include("~/Content/demo.css"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_c3").Include("~/Scripts/charts_c3.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_chartist").Include("~/Scripts/charts_chartist.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_chartjs").Include("~/Scripts/charts_chartjs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_flot").Include("~/Scripts/charts_flot.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_gmaps").Include("~/Scripts/charts_gmaps.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_mapael").Include("~/Scripts/charts_mapael.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_morrisjs").Include("~/Scripts/charts_morrisjs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/charts_sparkline").Include("~/Scripts/charts_sparkline.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/dashboards_dashboard-1").Include("~/Scripts/dashboards_dashboard-1.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/dashboards_dashboard-2").Include("~/Scripts/dashboards_dashboard-2.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/dashboards_dashboard-3").Include("~/Scripts/dashboards_dashboard-3.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/dashboards_dashboard-4").Include("~/Scripts/dashboards_dashboard-4.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/dashboards_dashboard-5").Include("~/Scripts/dashboards_dashboard-5.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/demo").Include("~/Scripts/demo.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_custom-controls").Include("~/Scripts/forms_custom-controls.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_dual-listbox").Include("~/Scripts/forms_dual-listbox.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_editors").Include("~/Scripts/forms_editors.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_extras").Include("~/Scripts/forms_extras.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_file-upload").Include("~/Scripts/forms_file-upload.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_input-groups").Include("~/Scripts/forms_input-groups.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_pickers").Include("~/Scripts/forms_pickers.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_selects").Include("~/Scripts/forms_selects.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_sliders").Include("~/Scripts/forms_sliders.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_typeahead").Include("~/Scripts/forms_typeahead.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_validation").Include("~/Scripts/forms_validation.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/forms_wizard").Include("~/Scripts/forms_wizard.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/layouts").Include("~/Scripts/layouts.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_blockui").Include("~/Scripts/misc_blockui.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_clipboardjs").Include("~/Scripts/misc_clipboardjs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_idle-timer").Include("~/Scripts/misc_idle-timer.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_ladda").Include("~/Scripts/misc_ladda.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_masonry").Include("~/Scripts/misc_masonry.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_numeraljs").Include("~/Scripts/misc_numeraljs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_perfect-scrollbar").Include("~/Scripts/misc_perfect-scrollbar.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/misc_vegasjs").Include("~/Scripts/misc_vegasjs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_account-settings").Include("~/Scripts/pages_account-settings.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_articles_edit").Include("~/Scripts/pages_articles_edit.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_articles_list").Include("~/Scripts/pages_articles_list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_chat").Include("~/Scripts/pages_chat.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_clients").Include("~/Scripts/pages_clients.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_contacts").Include("~/Scripts/pages_contacts.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_e-commerce_order-list").Include("~/Scripts/pages_e-commerce_order-list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_e-commerce_product-edit").Include("~/Scripts/pages_e-commerce_product-edit.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_e-commerce_product-item").Include("~/Scripts/pages_e-commerce_product-item.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_e-commerce_product-list").Include("~/Scripts/pages_e-commerce_product-list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_file-manager").Include("~/Scripts/pages_file-manager.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_gallery").Include("~/Scripts/pages_gallery.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_kanban-board").Include("~/Scripts/pages_kanban-board.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_messages").Include("~/Scripts/pages_messages.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_projects_item").Include("~/Scripts/pages_projects_item.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_projects_list").Include("~/Scripts/pages_projects_list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_task-list").Include("~/Scripts/pages_task-list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_teams").Include("~/Scripts/pages_teams.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_tickets_edit").Include("~/Scripts/pages_tickets_edit.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_tickets_list").Include("~/Scripts/pages_tickets_list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_users_edit").Include("~/Scripts/pages_users_edit.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_users_list").Include("~/Scripts/pages_users_list.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/pages_vacancies").Include("~/Scripts/pages_vacancies.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/tables_bootstrap-table").Include("~/Scripts/tables_bootstrap-table.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/tables_datatables").Include("~/Scripts/tables_datatables.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_app-brand").Include("~/Scripts/ui_app-brand.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_button-groups").Include("~/Scripts/ui_button-groups.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_carousel").Include("~/Scripts/ui_carousel.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_cropper").Include("~/Scripts/ui_cropper.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_drag-and-drop").Include("~/Scripts/ui_drag-and-drop.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_dropdowns").Include("~/Scripts/ui_dropdowns.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_fullcalendar").Include("~/Scripts/ui_fullcalendar.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_lightbox").Include("~/Scripts/ui_lightbox.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_media-player").Include("~/Scripts/ui_media-player.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_modals").Include("~/Scripts/ui_modals.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_navbar").Include("~/Scripts/ui_navbar.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_navs").Include("~/Scripts/ui_navs.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_notifications").Include("~/Scripts/ui_notifications.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_sidenav").Include("~/Scripts/ui_sidenav.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_tooltips").Include("~/Scripts/ui_tooltips.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_tour").Include("~/Scripts/ui_tour.js"));
            bundles.Add(new ScriptBundle("~/bundle/js/ui_treeview").Include("~/Scripts/ui_treeview.js"));

            // Bundle jquery-validation-unobtrusive package
            bundles.Add(new ScriptBundle("~/bundle/vendor/js/jquery-validation-unobtrusive/jquery-validation-unobtrusive").Include(
                        "~/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js"));

            // ------------------------------------------------------------------------------------
            // Core stylesheets
            //


            bundles.Add(SassBundle("~/bundle/vendor/css/bootstrap").Include("~/Vendor/css/rtl/bootstrap.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/bootstrap-material").Include("~/Vendor/css/rtl/bootstrap-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/appwork").Include("~/Vendor/css/rtl/appwork.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/appwork-material").Include("~/Vendor/css/rtl/appwork-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/colors").Include("~/Vendor/css/rtl/colors.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/colors-material").Include("~/Vendor/css/rtl/colors-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/uikit").Include("~/Vendor/css/rtl/uikit.scss"));

            // Themes
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-air").Include("~/Vendor/css/rtl/theme-air.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-air-material").Include("~/Vendor/css/rtl/theme-air-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-corporate").Include("~/Vendor/css/rtl/theme-corporate.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-corporate-material").Include("~/Vendor/css/rtl/theme-corporate-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-cotton").Include("~/Vendor/css/rtl/theme-cotton.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-cotton-material").Include("~/Vendor/css/rtl/theme-cotton-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-gradient").Include("~/Vendor/css/rtl/theme-gradient.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-gradient-material").Include("~/Vendor/css/rtl/theme-gradient-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-paper").Include("~/Vendor/css/rtl/theme-paper.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-paper-material").Include("~/Vendor/css/rtl/theme-paper-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-shadow").Include("~/Vendor/css/rtl/theme-shadow.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-shadow-material").Include("~/Vendor/css/rtl/theme-shadow-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-soft").Include("~/Vendor/css/rtl/theme-soft.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-soft-material").Include("~/Vendor/css/rtl/theme-soft-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-sunrise").Include("~/Vendor/css/rtl/theme-sunrise.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-sunrise-material").Include("~/Vendor/css/rtl/theme-sunrise-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-twitlight").Include("~/Vendor/css/rtl/theme-twitlight.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-twitlight-material").Include("~/Vendor/css/rtl/theme-twitlight-material.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-vibrant").Include("~/Vendor/css/rtl/theme-vibrant.scss"));
            bundles.Add(SassBundle("~/bundle/vendor/css/theme-vibrant-material").Include("~/Vendor/css/rtl/theme-vibrant-material.scss"));

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