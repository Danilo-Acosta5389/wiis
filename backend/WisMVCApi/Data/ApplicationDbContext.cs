using Microsoft.EntityFrameworkCore;
using WisMVCApi.Models;

#nullable disable

namespace WisMVCApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
        }

        public DbSet<QuestionsModel> Questions { get; set; }
        public DbSet<AnswersModel> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Mapping Foreign Keys
            // AnswersTable
            modelBuilder.Entity<AnswersModel>()
                .HasOne(x => x.Questions)
                .WithMany(x => x.Answers)
                .HasForeignKey(x => x.QuestionId);

            modelBuilder.Entity<QuestionsModel>().HasData(
                new QuestionsModel { Id = 1, Title = "Are we cyborgs?", Text = "Yes / No / Don’t know what a cyborg is", AnswerType = "options" },
                new QuestionsModel { Id = 2, Title = "Do technology set us free?", Text = "1-5", AnswerType = "number" },
                new QuestionsModel { Id = 3, Title = "Are you worried about the future?", Text = "1-5", AnswerType = "number" },
                new QuestionsModel { Id = 4, Title = "Does our job define us?", Text = "1-5", AnswerType = "number" },
                new QuestionsModel { Id = 5, Title = "How would you describe your mental health?", Text = "You can write anything", AnswerType = "text" });

            modelBuilder.Entity<AnswersModel>().HasData(
                new AnswersModel { Id = 1, Answer = "Yes", QuestionId = 1, DateAndTime = DateTime.UtcNow },
                new AnswersModel { Id = 2, Answer = "4", QuestionId = 2, DateAndTime = DateTime.UtcNow },
                new AnswersModel { Id = 3, Answer = "2", QuestionId = 3, DateAndTime = DateTime.UtcNow },
                new AnswersModel { Id = 4, Answer = "5", QuestionId = 4, DateAndTime = DateTime.UtcNow },
                new AnswersModel { Id = 5, Answer = "It's ok, i guess.", QuestionId = 5, DateAndTime = DateTime.UtcNow });
        }
    }
}
