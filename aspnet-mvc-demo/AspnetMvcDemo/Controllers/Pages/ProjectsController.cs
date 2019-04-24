using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class ProjectsController : Controller
    {

         public ActionResult Item()
        {
            return View("~/Views/Pages/Projects/Item.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/Projects/List.cshtml");
        }

    }
}
