type TextProps = {
  body: string;
};

export default function Text({ body }: TextProps) {
  return <p>{body}</p>;
}
