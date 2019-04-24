using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class ArticlesController : Controller
    {

         public ActionResult Edit()
        {
            return View("~/Views/Pages/Articles/Edit.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/Articles/List.cshtml");
        }

    }
}
