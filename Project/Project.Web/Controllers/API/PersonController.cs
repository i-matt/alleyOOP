using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Project.Models.Responses;
using Project.Models.Domain;
using Project.Services.Services;
using Project.Models.Requests;

namespace Project.Web.Controllers.API
{
    [RoutePrefix("api/person")]
    public class PersonController : ApiController
    {
        PersonService svc = new PersonService();

        // GET api/<controller>
        [Route("getall"), HttpGet]
        public HttpResponseMessage GetAll()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemListResponse<Person> resp = new ItemListResponse<Person>();
                    resp.Items = svc.GetAll();
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

        // GET api/<controller>/5
        [Route("{id:int}"), HttpGet]
        public HttpResponseMessage GetById(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<Person> resp = new ItemResponse<Person>();
                    resp.Item = svc.GetById(id);
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

        // POST api/<controller>
        [Route, HttpPost]
        public HttpResponseMessage Post(PersonAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    model.ModifiedBy = "C#";
                    svc.Insert(model);
                    SuccessResponse resp = new SuccessResponse();
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

        // PUT api/<controller>/5
        [Route("{id:int}"),HttpPut]
        public HttpResponseMessage Update(PersonAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    model.ModifiedBy = "C#";
                    svc.Update(model);
                    SuccessResponse resp = new SuccessResponse();
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

        // DELETE api/<controller>/5
        [Route("{id:int}"),HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                SuccessResponse resp = new SuccessResponse();
                svc.Delete(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}