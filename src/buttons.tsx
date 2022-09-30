import React, { CSSProperties, FC } from 'react';
import './index.less';

/**
 * 按钮样式类型值
 */
type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
type ButtonSize = 'large' | 'small';
type Shape = 'default' | 'circle' | 'round';

/**
 * Button属性
 */
interface ButtonProps {
  /**
   * 按钮样式类型. 默认:light
   */
  type?: ButtonType;
  /**
   * 使用颜色边框而非背景色. 默认:false
   */
  outline?: boolean;
  /**
   * 按钮大小
   */
  size?: ButtonSize;
  /**
   * 是否为块级按钮. 默认:false 块级按钮会填充整个块
   */
  block?: boolean;
  /**
   * 是否禁用. 默认:false
   */
  disabled?: boolean;
  /**
   * 点击事件
   * @param evt
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * 类
   */
  className?: string;
  /**
   * 独立样式属性
   */
  style?: CSSProperties;
  /**
   * 形状
   * */

  shape?: Shape;
  children?: string;
}

interface ButtonProperties {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
}

/**
 * 按钮
 * @param props
 * @constructor
 */
const Buttons: FC<ButtonProps> = props => {
  const {
    children,
    type = 'primary',
    outline = false,
    size,
    block = false,
    disabled = false,
    shape = 'default',
    onClick,
    className = '',
    style,
  } = props;

  const btnCls = outline ? `btn-outline-${type}` : `btn-${type}`;
  const sizeCls = !size ? '' : size === 'small' ? 'btn-sm' : 'btn-lg';
  const blockCls = block ? 'btn-block' : '';
  const shapeCls = size ? `btn-shape-${shape}-${size}` : `btn-shape-${shape}`;
  const disabledCls = disabled ? 'btn-disable' : '';
  const obj: ButtonProperties = {};
  if (onClick) {
    obj.onClick = evt => {
      if (!disabled) {
        // 只有按钮在非禁用状态, 才触发真实的点击事件
        return onClick(evt);
      }
    };
  }
  if (disabled) {
    obj.disabled = disabled;
    // @ts-ignore
    obj['aria-disabled'] = disabled;
  }
  if (style) {
    obj.style = style;
  }
  return (
    <button
      type="button"
      className={`btn ${btnCls} ${sizeCls} ${blockCls} ${disabledCls} ${shapeCls} ${className} `}
      {...obj}
    >
      {children}
    </button>
  );
};
Buttons.defaultProps = {
  type: 'primary',
};
export default Buttons;
