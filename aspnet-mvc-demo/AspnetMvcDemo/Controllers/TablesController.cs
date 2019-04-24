using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class TablesController : Controller
    {

         public ActionResult BootstrapSortable()
        {
            return View("~/Views/Tables/BootstrapSortable.cshtml");
        }

         public ActionResult BootstrapTable()
        {
            return View("~/Views/Tables/BootstrapTable.cshtml");
        }

         public ActionResult Bootstrap()
        {
            return View("~/Views/Tables/Bootstrap.cshtml");
        }

         public ActionResult Datatables()
        {
            return View("~/Views/Tables/Datatables.cshtml");
        }

    }
}
