const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl'
  }).format(value); // TODO

export default formatValue;
