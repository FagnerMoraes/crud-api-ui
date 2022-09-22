using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace crud_dotnet.Migrations
{
    public partial class popularcurso : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "cursos",
                columns: new[] { "Id", "Categoria", "Name" },
                values: new object[] { 1, "Back End", "Dotnet API" });

            migrationBuilder.InsertData(
                table: "cursos",
                columns: new[] { "Id", "Categoria", "Name" },
                values: new object[] { 2, "Front End", "Angular" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "cursos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "cursos",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
