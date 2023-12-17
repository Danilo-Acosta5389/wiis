using Microsoft.AspNetCore.Http;
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

        // POST: api/survey/{Title}/{Text}
        [HttpPost]
        public async Task<ActionResult<AnswersModel>> Post(AnswersModel answersModel)
        {
            var post = _context.Add(answersModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), 
                new 
                {
                    text = answersModel.Text, 
                    number = answersModel.Number, ip = answersModel.IpAddress,
                    question = answersModel.QuestionId 
                }, answersModel);
        }
    }
}
