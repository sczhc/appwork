using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class TicketsController : Controller
    {

         public ActionResult Edit()
        {
            return View("~/Views/Pages/Tickets/Edit.cshtml");
        }

         public ActionResult List()
        {
            return View("~/Views/Pages/Tickets/List.cshtml");
        }

    }
}
