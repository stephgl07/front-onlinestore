export interface DataTableColumn {
  id: string;
  label: string;
}

export const getColumnNames = <T extends object>(obj: T): DataTableColumn[] => {
  const propertyNames = Object.keys(obj).map(
    (key): DataTableColumn => ({
      id: key,
      label: key.toUpperCase(),
    })
  );

  return propertyNames;
};

export const getRowsPerPage = (
  options: number[] | undefined,
  dataLength: number
) => {
  let rowsPerPage =
    options && options.length > 0
      ? [dataLength, ...options]
      : [5, 10, 25, 50, dataLength];

  rowsPerPage = Array.from(new Set(rowsPerPage));

  rowsPerPage = rowsPerPage
    .filter((value) => value <= dataLength)
    .sort((a, b) => a - b);
    
  return rowsPerPage;
};
