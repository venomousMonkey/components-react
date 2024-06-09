import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-amber-500 bg-zinc-700 text-white': primary,
      'border-amber-500 bg-sky-900 text-white': secondary,
      'border-amber-500 bg-emerald-600 text-white': success,
      'border-amber-500 bg-amber-800 text-white': warning,
      'border-amber-500 bg-red-800 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-zinc-700': outline && primary,
      'text-sky-900': outline && secondary,
      'text-emerald-600': outline && success,
      'text-amber-800': outline && warning,
      'text-red-800': outline && danger,
    }
  );

  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
