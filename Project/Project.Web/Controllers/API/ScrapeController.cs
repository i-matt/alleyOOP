using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Project.Models.Requests;
using Project.Services.Services;
using Project.Models.Responses;
using HtmlAgilityPack;
using Project.Models.Domain;

namespace Project.Web.Controllers.API
{
    [RoutePrefix("api")]
    public class ScrapeController : ApiController
    {
        ScrapeService svc = new ScrapeService();

        // POST api/<controller>
        [Route("espn"), HttpGet]
        public HttpResponseMessage GetAll()
        {
            var url = @"http://www.espn.com/nba/team/_/name/okc/";

            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(url);

            var body = htmlDoc.DocumentNode.SelectNodes("//ul/ul/li/a");
            List<string> opponent = new List<string>();
            List<string> score = new List<string>();

            foreach (var node in body)
            {
                foreach (var child in node.ChildNodes)
                {
                    if (child.Attributes["class"].Value == "game-info")
                    {
                        opponent.Add(child.InnerHtml);
                    }

                    if (child.Attributes["class"].Value == "game-meta")
                    {
                        score.Add(child.ChildNodes[1].InnerHtml);
                    }
                }
            }

            Scrape model = new Scrape();

            model.Opponent = opponent;
            model.Score = score;
            model.Url = url;

            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<Scrape> resp = new ItemResponse<Scrape>();
                    resp.Item = model;
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}