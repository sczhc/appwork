using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers
{
    public class PagesController : Controller
    {

         public ActionResult AccountSettings()
        {
            return View("~/Views/Pages/AccountSettings.cshtml");
        }

         public ActionResult Chat()
        {
            return View("~/Views/Pages/Chat.cshtml");
        }

         public ActionResult Clients()
        {
            return View("~/Views/Pages/Clients.cshtml");
        }

         public ActionResult Contacts()
        {
            return View("~/Views/Pages/Contacts.cshtml");
        }

         public ActionResult Faq()
        {
            return View("~/Views/Pages/Faq.cshtml");
        }

         public ActionResult FileManager()
        {
            return View("~/Views/Pages/FileManager.cshtml");
        }

         public ActionResult Gallery()
        {
            return View("~/Views/Pages/Gallery.cshtml");
        }

         public ActionResult HelpCenter()
        {
            return View("~/Views/Pages/HelpCenter.cshtml");
        }

         public ActionResult InvoicePrint()
        {
            return View("~/Views/Pages/InvoicePrint.cshtml");
        }

         public ActionResult Invoice()
        {
            return View("~/Views/Pages/Invoice.cshtml");
        }

         public ActionResult KanbanBoard()
        {
            return View("~/Views/Pages/KanbanBoard.cshtml");
        }

         public ActionResult Pricing()
        {
            return View("~/Views/Pages/Pricing.cshtml");
        }

         public ActionResult ProfileV1()
        {
            return View("~/Views/Pages/ProfileV1.cshtml");
        }

         public ActionResult ProfileV2()
        {
            return View("~/Views/Pages/ProfileV2.cshtml");
        }

         public ActionResult SearchResults()
        {
            return View("~/Views/Pages/SearchResults.cshtml");
        }

         public ActionResult TaskList()
        {
            return View("~/Views/Pages/TaskList.cshtml");
        }

         public ActionResult Teams()
        {
            return View("~/Views/Pages/Teams.cshtml");
        }

         public ActionResult Vacancies()
        {
            return View("~/Views/Pages/Vacancies.cshtml");
        }

         public ActionResult Voting()
        {
            return View("~/Views/Pages/Voting.cshtml");
        }

    }
}
