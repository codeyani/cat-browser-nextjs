type TOptionValue = {
  id: string;
  name: string;
}

export type TSelectProps = {
  label: string|null;
  altLabel: string|null;
  options: TOptionValue[]
  defaultValue: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void
}