function HEXtoRGBA(str, mutator){
	var _mutator = mutator === undefined ? (color) => color : mutator;

	var rangeNormalizer = (value, min, max) => Math.max(Math.min(value, max), min); 
	var colorNormalizer = color => rangeNormalizer(color, 0, 255); 
	var opacityNormalizer = opacity => rangeNormalizer(opacity, 0, 1);
	
	var converter = hex => {
		var colors = {
			r: parseInt('0x' + hex.substr(1,2)),
			g: parseInt('0x' + hex.substr(3,2)),
			b: parseInt('0x' + hex.substr(5,2)),
			a: 1
		};
		var mutatedColors = _mutator(colors); 
		var normalizedMutatedColors = {
			r: colorNormalizer(mutatedColors.r),
			g: colorNormalizer(mutatedColors.g),
			b: colorNormalizer(mutatedColors.b),
			a: opacityNormalizer(mutatedColors.a)
		};

		return `rgba(${normalizedMutatedColors.r}, ${normalizedMutatedColors.g}, ${normalizedMutatedColors.b}, ${normalizedMutatedColors.a})`;
	};

	return str.replace(/#.{6}/g, converter);
}

export default {
	HEXtoRGBA
};