using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class AuthenticationController : Controller
    {

         public ActionResult EmailConfirm()
        {
            return View("~/Views/Pages/Authentication/EmailConfirm.cshtml");
        }

         public ActionResult LockScreenV1()
        {
            return View("~/Views/Pages/Authentication/LockScreenV1.cshtml");
        }

         public ActionResult LockScreenV2()
        {
            return View("~/Views/Pages/Authentication/LockScreenV2.cshtml");
        }

         public ActionResult LoginAndRegister()
        {
            return View("~/Views/Pages/Authentication/LoginAndRegister.cshtml");
        }

         public ActionResult LoginV1()
        {
            return View("~/Views/Pages/Authentication/LoginV1.cshtml");
        }

         public ActionResult LoginV2()
        {
            return View("~/Views/Pages/Authentication/LoginV2.cshtml");
        }

         public ActionResult LoginV3()
        {
            return View("~/Views/Pages/Authentication/LoginV3.cshtml");
        }

         public ActionResult PasswordReset()
        {
            return View("~/Views/Pages/Authentication/PasswordReset.cshtml");
        }

         public ActionResult RegisterV1()
        {
            return View("~/Views/Pages/Authentication/RegisterV1.cshtml");
        }

         public ActionResult RegisterV2()
        {
            return View("~/Views/Pages/Authentication/RegisterV2.cshtml");
        }

         public ActionResult RegisterV3()
        {
            return View("~/Views/Pages/Authentication/RegisterV3.cshtml");
        }

    }
}
