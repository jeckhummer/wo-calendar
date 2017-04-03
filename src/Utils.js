import * as _ from 'lodash';

function HEXtoRGBA(str, mutator) {
    const _mutator = mutator === undefined ? (color) => color : mutator;

    const rangeNormalizer = (value, min, max) => Math.max(Math.min(value, max), min);
    const colorNormalizer = color => rangeNormalizer(color, 0, 255);
    const opacityNormalizer = opacity => rangeNormalizer(opacity, 0, 1);

    const converter = hex => {
        const colors = {
            r: parseInt('0x' + hex.substr(1, 2)),
            g: parseInt('0x' + hex.substr(3, 2)),
            b: parseInt('0x' + hex.substr(5, 2)),
            a: 1
        };
        const mutatedColors = _mutator(colors);
        const normalizedMutatedColors = {
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

export const teamIdToColorMapper = (id, allIds, intensive) => {
    const i = allIds.indexOf(id);
    const ratio = i / allIds.length;

    return `hsl(${Math.round(330 * ratio)},100%,${intensive ? 70 : 80}%)`;
};

export const statusToColorMapper = (status) => {
    return {
        'awaiting submission': 'orange',
        'task on hold': 'lightgrey',
        'task rejected': 'orangered',
        'task pending': 'orange',
        'task failed': 'red',
        'task complete': 'grey',
        'task execution in progress': 'green',
        'task completed with fail point': 'green',
        'waiting for hox': 'yellow',
        'waiting for hox+': 'yellow',
        'waiting for coo': 'yellow',
        'waiting for noc': 'yellow',
        'task waiting for assignment': 'yellow',
        'draft wo': 'lightgrey',
        'open': 'green',
        'rejected': 'orangered',
        'closed': 'grey',
        'canceled': 'red',
    }[status.toLowerCase()];
};