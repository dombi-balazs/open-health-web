using Microsoft.ML.Data;

namespace open_health_web.mlnet // <--- ITT IS A SZERVER NÉVTERE LEGYEN
{
    public class ModelOutput
    {
        // --- INNENTŐL MÁSOLHATOD A WINUI-BÓL ---
        [ColumnName(@"PredictedLabel")]
        public string? PredictedLabel { get; set; }

        [ColumnName(@"Score")]
        public float[]? Score { get; set; }
        // --- EDDIG ---
    }
}