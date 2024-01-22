using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WisMVCApi.Data;
using WisMVCApi.Models;

namespace WisMVCApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AnswerController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/answer/
        [HttpGet]
        public async Task<List<AnswersModel>> Get()
        {
            return await _context.Answers.ToListAsync();
        }

        // POST: api/answer/
        [HttpPost]
        public async Task<IActionResult> Post(AnswersModel answersModel)
        {
            var request = _context.Add(answersModel);
            await _context.SaveChangesAsync();
            return Created(HttpContext.Request.GetDisplayUrl(), request);
        }
    }
}
