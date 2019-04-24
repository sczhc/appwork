using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class UsersController : Controller
    {

         public ActionResult Edit()
        {
            return View("~/Views/Pages/Users/Edit.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/Users/List.cshtml");
        }

         public ActionResult Show()
        {
            return View("~/Views/Pages/Users/Show.cshtml");
        }

    }
}
