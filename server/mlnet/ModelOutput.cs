using Microsoft.ML.Data;

namespace open_health_web.mlnet
{
    public class ModelOutput
    {
        [ColumnName(@"PredictedLabel")]
        public string? PredictedLabel { get; set; }

        [ColumnName(@"Score")]
        public float[]? Score { get; set; }
    }
}