using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ML;
using open_health_web.mlnet;
using Microsoft.ML.Data;

namespace open_health_web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkinCheckController : ControllerBase
    {
        private readonly PredictionEnginePool<ModelInput, ModelOutput> _predictionEnginePool;

        public SkinCheckController(PredictionEnginePool<ModelInput, ModelOutput> predictionEnginePool)
        {
            _predictionEnginePool = predictionEnginePool;
        }

        [HttpPost]
        public async Task<IActionResult> AnalyzeSkin([FromForm] IFormFile image)
        {
            if (image == null || image.Length == 0)
                return BadRequest("Please upload an image.");

            byte[] imageBytes;
            using (var ms = new MemoryStream())
            {
                await image.CopyToAsync(ms);
                imageBytes = ms.ToArray();
            }

            var input = new ModelInput
            {
                ImageSource = imageBytes
            };
            ModelOutput prediction = _predictionEnginePool.Predict("SkinModel", input);
            var maxScore = prediction.Score.Max();
            return Ok(new 
            { 
                Diagnosis = prediction.PredictedLabel,
                Confidence = maxScore * 100,
                Message = $"result: {prediction.PredictedLabel}"
            });
        }
    }
}