using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


#nullable disable

namespace WisMVCApi.Models
{
    public class AnswersModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public int Number { get; set; }

        [Required]
        public string IpAddress { get; set; }

        [Required]
        public int QuestionId { get; set; }

        public virtual QuestionsModel Questions { get; set; }
    }
}