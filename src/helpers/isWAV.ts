import path = require("path");

const isWAV = (filePath: string): boolean => {
  const ext = path.extname(filePath);
  return ext.toLowerCase() === '.wav';
};

export default isWAV;