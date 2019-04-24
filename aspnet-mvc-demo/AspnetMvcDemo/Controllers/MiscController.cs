using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class MiscController : Controller
    {

         public ActionResult Blockui()
        {
            return View("~/Views/Misc/Blockui.cshtml");
        }

         public ActionResult Clipboardjs()
        {
            return View("~/Views/Misc/Clipboardjs.cshtml");
        }

         public ActionResult IdleTimer()
        {
            return View("~/Views/Misc/IdleTimer.cshtml");
        }

         public ActionResult Ladda()
        {
            return View("~/Views/Misc/Ladda.cshtml");
        }

         public ActionResult Masonry()
        {
            return View("~/Views/Misc/Masonry.cshtml");
        }

         public ActionResult Numeraljs()
        {
            return View("~/Views/Misc/Numeraljs.cshtml");
        }

         public ActionResult PerfectScrollbar()
        {
            return View("~/Views/Misc/PerfectScrollbar.cshtml");
        }

         public ActionResult Spinkit()
        {
            return View("~/Views/Misc/Spinkit.cshtml");
        }

         public ActionResult Vegasjs()
        {
            return View("~/Views/Misc/Vegasjs.cshtml");
        }

    }
}
