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

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'name': self.name,
            'email': self.email
        }


class Category(Base):
    __tablename__ = 'category'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(200))
    created_on = Column(DateTime, default=func.now())
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    user = relationship("User")
    card = relationship("Card")

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'name': self.name,
            'description': self.description,
            'created_on': self.created_on
        }


class Card(Base):
    __tablename__ = 'card'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    translated_name = Column(String(250), nullable=False)
    #memorized = Column(Integer)
    memorized_bool = Column(Boolean)
    img_url = Column(String(500))
    created_on = Column(DateTime, default=func.now())
    category = relationship("Category")
    category_id = Column(Integer, ForeignKey('category.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User")

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'name': self.name,
            'translated_name': self.translated_name,
            'img_url': self.img_url,
            'memorized_bool': self.memorized_bool,
            'created_on': self.created_on
        }


engine = create_engine('sqlite:///flashcard.db')
Base.metadata.create_all(engine)
