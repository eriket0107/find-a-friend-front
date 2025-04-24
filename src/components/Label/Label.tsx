import { Label as LabelComponent } from '@/components/ui/label'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = (props: LabelProps) => {
  return <LabelComponent className="text-primary text-md" {...props} />
}

