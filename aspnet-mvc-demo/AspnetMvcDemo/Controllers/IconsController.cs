using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class IconsController : Controller
    {

         public ActionResult FontAwesome()
        {
            return View("~/Views/Icons/FontAwesome.cshtml");
        }

         public ActionResult Ionicons()
        {
            return View("~/Views/Icons/Ionicons.cshtml");
        }

         public ActionResult Linearicons()
        {
            return View("~/Views/Icons/Linearicons.cshtml");
        }

         public ActionResult Openiconic()
        {
            return View("~/Views/Icons/Openiconic.cshtml");
        }

         public ActionResult Stroke7()
        {
            return View("~/Views/Icons/Stroke7.cshtml");
        }

    }
}
