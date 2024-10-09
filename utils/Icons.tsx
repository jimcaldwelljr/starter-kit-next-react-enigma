import { FaUsers } from 'react-icons/fa6'
import { FaPlug } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'

export default function Icons({
  iconName,
  className,
}: {
  iconName: string
  className?: string
}) {
  switch (iconName) {
    case 'lock':
      return <IoMdLock className={className} />

    case 'user':
      return <FaUsers className={className} />

    case 'intergration':
      return <FaPlug className={className} />
  }

  return <p className="text-xs text-white">Error</p>
}
