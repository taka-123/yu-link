/**
 * 文字列を指定された最大長に切り詰める。超過分は省略記号（...）で置き換える。
 */
export function truncate(content: string, maxLength: number): string {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + '...';
  }
  return content;
}

/**
 * 日付文字列（ISO 8601形式）を「○年△月×日」の形式に変換する。
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}年${month}月${day}日`;
}
