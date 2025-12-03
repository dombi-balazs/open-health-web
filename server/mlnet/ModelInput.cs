using Microsoft.ML.Data;

namespace open_health_web.mlnet
{
    public class ModelInput
    {
        [LoadColumn(0)]
        [ColumnName(@"Label")]
        public string? Label { get; set; }

        [LoadColumn(1)]
        [ColumnName(@"ImageSource")]
        public byte[]? ImageSource { get; set; }
    }
}