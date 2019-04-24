using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class FormsController : Controller
    {

         public ActionResult Controls()
        {
            return View("~/Views/Forms/Controls.cshtml");
        }

         public ActionResult CustomControls()
        {
            return View("~/Views/Forms/CustomControls.cshtml");
        }

         public ActionResult DualListbox()
        {
            return View("~/Views/Forms/DualListbox.cshtml");
        }

         public ActionResult Editors()
        {
            return View("~/Views/Forms/Editors.cshtml");
        }

         public ActionResult Extras()
        {
            return View("~/Views/Forms/Extras.cshtml");
        }

         public ActionResult FileUpload()
        {
            return View("~/Views/Forms/FileUpload.cshtml");
        }

         public ActionResult InputGroups()
        {
            return View("~/Views/Forms/InputGroups.cshtml");
        }

         public ActionResult Layouts()
        {
            return View("~/Views/Forms/Layouts.cshtml");
        }

         public ActionResult Pickers()
        {
            return View("~/Views/Forms/Pickers.cshtml");
        }

         public ActionResult Selects()
        {
            return View("~/Views/Forms/Selects.cshtml");
        }

         public ActionResult Sliders()
        {
            return View("~/Views/Forms/Sliders.cshtml");
        }

         public ActionResult Switchers()
        {
            return View("~/Views/Forms/Switchers.cshtml");
        }

         public ActionResult Typeahead()
        {
            return View("~/Views/Forms/Typeahead.cshtml");
        }

         public ActionResult Validation()
        {
            return View("~/Views/Forms/Validation.cshtml");
        }

         public ActionResult Wizard()
        {
            return View("~/Views/Forms/Wizard.cshtml");
        }

    }
}
