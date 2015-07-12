var src = './lib';

function getAlgorithm(algorithm) {
	return require(src + '/' + algorithm);
}

module.exports = {
	bubbleSort: getAlgorithm('bubbleSort'),
	insertionSort: getAlgorithm('insertionSort'),
	selectionSort: getAlgorithm('selectionSort'),
	heapSort: getAlgorithm('heapSort'),
	quickSort: getAlgorithm('quickSort'),
	mergeSort: getAlgorithm('mergeSort')
}