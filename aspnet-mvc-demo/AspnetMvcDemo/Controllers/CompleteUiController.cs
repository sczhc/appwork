using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class CompleteUiController : Controller
    {

         public ActionResult Base()
        {
            return View("~/Views/CompleteUi/Base.cshtml");
        }

         public ActionResult Charts()
        {
            return View("~/Views/CompleteUi/Charts.cshtml");
        }

         public ActionResult Plugins()
        {
            return View("~/Views/CompleteUi/Plugins.cshtml");
        }

    }
}
