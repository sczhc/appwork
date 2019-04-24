using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class EducationController : Controller
    {

         public ActionResult CoursesV1()
        {
            return View("~/Views/Pages/Education/CoursesV1.cshtml");
        }

         public ActionResult CoursesV2()
        {
            return View("~/Views/Pages/Education/CoursesV2.cshtml");
        }

    }
}
