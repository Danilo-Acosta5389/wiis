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
        }
    }
}
