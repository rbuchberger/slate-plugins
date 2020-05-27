import React from 'react';
import { getPreventDefaultHandler } from 'common/utils/getPreventDefaultHandler';
import { useSlate } from 'slate-react';
import { ToolbarBlockProps, ToolbarButton } from 'components/ToolbarButton';
import { isMarkActive } from '../queries';
import { toggleMark } from '../transforms';

/**
 * Toolbar button to toggle mark.
 */
export const ToolbarMark = ({ type, clear, ...props }: ToolbarBlockProps) => {
  const editor = useSlate();

  return (
    <ToolbarButton
      active={isMarkActive(editor, type)}
      onMouseDown={getPreventDefaultHandler(toggleMark, editor, type, clear)}
      {...props}
    />
  );
};
