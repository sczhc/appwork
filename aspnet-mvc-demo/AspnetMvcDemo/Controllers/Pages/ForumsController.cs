using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class ForumsController : Controller
    {

         public ActionResult Discussion()
        {
            return View("~/Views/Pages/Forums/Discussion.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/Forums/List.cshtml");
        }

         public ActionResult Threads()
        {
            return View("~/Views/Pages/Forums/Threads.cshtml");
        }

    }
}
