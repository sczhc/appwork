using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class ChartsController : Controller
    {

         public ActionResult C3()
        {
            return View("~/Views/Charts/C3.cshtml");
        }

         public ActionResult Chartist()
        {
            return View("~/Views/Charts/Chartist.cshtml");
        }

         public ActionResult Chartjs()
        {
            return View("~/Views/Charts/Chartjs.cshtml");
        }

         public ActionResult Flot()
        {
            return View("~/Views/Charts/Flot.cshtml");
        }

         public ActionResult Gmaps()
        {
            return View("~/Views/Charts/Gmaps.cshtml");
        }

         public ActionResult Mapael()
        {
            return View("~/Views/Charts/Mapael.cshtml");
        }

         public ActionResult Morrisjs()
        {
            return View("~/Views/Charts/Morrisjs.cshtml");
        }

         public ActionResult Sparkline()
        {
            return View("~/Views/Charts/Sparkline.cshtml");
        }

    }
}
