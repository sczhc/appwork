using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class MessagesV2Controller : Controller
    {

         public ActionResult Compose()
        {
            return View("~/Views/Pages/MessagesV2/Compose.cshtml");
        }

         public ActionResult Item()
        {
            return View("~/Views/Pages/MessagesV2/Item.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/MessagesV2/List.cshtml");
        }

    }
}
