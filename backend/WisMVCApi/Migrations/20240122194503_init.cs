﻿using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WisMVCApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Text = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AnswerType = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Answers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Answer = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IpAddress = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DateAndTime = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    QuestionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Answers_Questions_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "Id", "AnswerType", "Text", "Title" },
                values: new object[,]
                {
                    { 1, "options", "Yes / No / Don’t know what a cyborg is", "Are we cyborgs?" },
                    { 2, "number", "1-5", "Do technology set us free?" },
                    { 3, "number", "1-5", "Are you worried about the future?" },
                    { 4, "number", "1-5", "Does our job define us?" },
                    { 5, "text", "You can write anything", "How would you describe your mental health?" }
                });

            migrationBuilder.InsertData(
                table: "Answers",
                columns: new[] { "Id", "Answer", "DateAndTime", "IpAddress", "QuestionId" },
                values: new object[,]
                {
                    { 1, "Yes", new DateTime(2024, 1, 22, 19, 45, 2, 999, DateTimeKind.Utc).AddTicks(903), null, 1 },
                    { 2, "4", new DateTime(2024, 1, 22, 19, 45, 2, 999, DateTimeKind.Utc).AddTicks(905), null, 2 },
                    { 3, "2", new DateTime(2024, 1, 22, 19, 45, 2, 999, DateTimeKind.Utc).AddTicks(905), null, 3 },
                    { 4, "5", new DateTime(2024, 1, 22, 19, 45, 2, 999, DateTimeKind.Utc).AddTicks(906), null, 4 },
                    { 5, "It's ok, i guess.", new DateTime(2024, 1, 22, 19, 45, 2, 999, DateTimeKind.Utc).AddTicks(906), null, 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Answers_QuestionId",
                table: "Answers",
                column: "QuestionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Answers");

            migrationBuilder.DropTable(
                name: "Questions");
        }
    }
}
