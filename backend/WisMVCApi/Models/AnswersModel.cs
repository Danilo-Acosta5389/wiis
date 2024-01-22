using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;


#nullable disable

namespace WisMVCApi.Models
{
    public class AnswersModel
    {
        [Key]
        public int Id { get; set; }

        [AllowNull]
        public string Answer { get; set; }

        [AllowNull]
        public string IpAddress { get; set; }

        [AllowNull]
        public DateTime DateAndTime { get; set; }

        [Required]
        public int QuestionId { get; set; }

        public virtual QuestionsModel Questions { get; set; }
    }
}