using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class MessagesV3Controller : Controller
    {

         public ActionResult Compose()
        {
            return View("~/Views/Pages/MessagesV3/Compose.cshtml");
        }

         public ActionResult Item()
        {
            return View("~/Views/Pages/MessagesV3/Item.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/MessagesV3/List.cshtml");
        }

    }
}
