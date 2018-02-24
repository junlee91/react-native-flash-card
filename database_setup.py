from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func, Boolean
from sqlalchemy.orm import relationship


Base = declarative_base()


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    picture = Column(String(250))


class Course(Base):
    __tablename__ = 'course'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(200))
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    user = relationship(User)
    cards = relationship('Card')

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        card_data = [card.serialize for card in self.cards]
        return {
            'cards': card_data,
            'description': self.description,
            'name': self.name,
            'id': self.id
        }


class Card(Base):
    __tablename__ = 'card'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String, nullable=False)
    memorized = Column(Integer)
    memorized_bool = Column(Boolean)
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    course_id = Column(Integer, ForeignKey('course.id'))
    course = relationship(Course)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)
    memorized_cards = relationship('MemorizedCard')

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'description': self.description,
            'name': self.name,
            'id': self.id
        }


class MemorizedCard(Base):
    __tablename__ = 'memorized_cards'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String, nullable=False)
    user = relationship(User)
    course = relationship(Course)
    card = relationship(Card)
    created_on = Column(DateTime, default=func.now())
    card_id = Column(Integer, ForeignKey('card.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    course_id = Column(Integer, ForeignKey('course.id'))


engine = create_engine('sqlite:///flashcard.db')
Base.metadata.create_all(engine)
