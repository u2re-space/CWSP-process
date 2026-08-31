/**
 * File-size limits shared by Responses request builders.
 *
 * FIND:ai-file-limits
 * WHY: Direct inline file input is base64 encoded, so a conservative source
 * file limit prevents a single attachment from exhausting a browser request.
 */
export const MAX_DIRECT_FILE_BYTES = 10 * 1024 * 1024;
