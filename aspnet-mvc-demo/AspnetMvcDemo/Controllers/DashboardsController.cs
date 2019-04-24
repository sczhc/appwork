using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class DashboardsController : Controller
    {

         public ActionResult Dashboard2()
        {
            return View("~/Views/Dashboards/Dashboard2.cshtml");
        }

         public ActionResult Dashboard3()
        {
            return View("~/Views/Dashboards/Dashboard3.cshtml");
        }

         public ActionResult Dashboard4()
        {
            return View("~/Views/Dashboards/Dashboard4.cshtml");
        }

         public ActionResult Dashboard5()
        {
            return View("~/Views/Dashboards/Dashboard5.cshtml");
        }

         public ActionResult Dashboard1()
        {
            return View("~/Views/Dashboards/Dashboard1.cshtml");
        }

    }
}
