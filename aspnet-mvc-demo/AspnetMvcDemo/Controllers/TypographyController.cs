using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class TypographyController : Controller
    {

         public ActionResult Typography()
        {
            return View("~/Views/Typography/Typography.cshtml");
        }

    }
}
