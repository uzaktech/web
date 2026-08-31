export const truncate = (value: string, maxLength: number, suffix: string = '...'): string => {
  	return value.length > maxLength ? `${value.substring(0, maxLength)}${suffix}` : value;
}