using Microsoft.EntityFrameworkCore;
using open_health_web.Data;
using Microsoft.Extensions.ML;
using open_health_web.mlnet;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy => policy.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddPredictionEnginePool<ModelInput, ModelOutput>()
    .FromFile(modelName: "SkinModel", filePath: "mlnet/MLModel1.mlnet", watchForChanges: true);

var app = builder.Build();

app.UseCors("AllowReact");

app.MapGet("/api/hello", () =>
{
    return new { message = "Hello World a Backendről! 👋" };
});

app.MapControllers();

app.Run("http://localhost:5000");