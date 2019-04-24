using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class LayoutExamplesController : Controller
    {

         public ActionResult Blank()
        {
            return View("~/Views/LayoutExamples/Blank.cshtml");
        }

         public ActionResult Helpers()
        {
            return View("~/Views/LayoutExamples/Helpers.cshtml");
        }

         public ActionResult HorizontalSidenav()
        {
            return View("~/Views/LayoutExamples/HorizontalSidenav.cshtml");
        }

         public ActionResult Layout1Flex()
        {
            return View("~/Views/LayoutExamples/Layout1Flex.cshtml");
        }

         public ActionResult Layout1()
        {
            return View("~/Views/LayoutExamples/Layout1.cshtml");
        }

         public ActionResult Layout2Flex()
        {
            return View("~/Views/LayoutExamples/Layout2Flex.cshtml");
        }

         public ActionResult Layout2()
        {
            return View("~/Views/LayoutExamples/Layout2.cshtml");
        }

         public ActionResult Options()
        {
            return View("~/Views/LayoutExamples/Options.cshtml");
        }

         public ActionResult WithoutNavbarFlex()
        {
            return View("~/Views/LayoutExamples/WithoutNavbarFlex.cshtml");
        }

         public ActionResult WithoutNavbar()
        {
            return View("~/Views/LayoutExamples/WithoutNavbar.cshtml");
        }

         public ActionResult WithoutSidenav()
        {
            return View("~/Views/LayoutExamples/WithoutSidenav.cshtml");
        }

    }
}
